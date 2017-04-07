package com.kalieki.sequence.user;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kalieki.sequence.files.DataFileController;
import com.sequencing.appchains.DefaultAppChainsImpl;
import com.sequencing.oauth.core.SequencingOAuth2Client;
import com.sequencing.oauth.core.Token;

@Component
public class ChainDao {
	private static Map<String, Map<String, Boolean>> cachedChainsByFileId = new HashMap<String, Map<String, Boolean>>();
	private static int i = 0;

	@Autowired
	private SequencingOAuth2Client oauth;

	public boolean userIsProneToHeartDisease() throws Exception {
		return isSusceptibleByFileIdAndChain("Chain63");
	}

	public boolean userIsVitaminDDeficient() throws Exception {
		/*
		 * System.err.println(i); i++; if (i % 2 == 0) { return true; } else {
		 * return false; }
		 */
		return true;
		//return isSusceptibleByFileIdAndChain("Chain88");
	}

	private boolean isSusceptibleByFileIdAndChain(String chain) throws Exception {
		Token token = oauth.getToken();
		DefaultAppChainsImpl chains = new DefaultAppChainsImpl(token.getAccessToken(), "api.sequencing.com");

		String fileId = DataFileController.getSelectedFile().getId();

		if (!cachedChainsByFileId.containsKey(fileId)) {
			cachedChainsByFileId.put(fileId, new HashMap<String, Boolean>());
		}

		if (!cachedChainsByFileId.get(fileId).containsKey(chain)) {
			DefaultAppChainsImpl.Report result = chains.getReport("StartApp", chain, fileId);

			System.err.println(new ObjectMapper().writeValueAsString(result));

			if (!result.isSucceeded()) {
				throw new RuntimeException("Something went wrong");
			}

			boolean wasFound = false;

			for (DefaultAppChainsImpl.Result r : result.getResults()) {
				DefaultAppChainsImpl.ResultType type = r.getValue().getType();

				if (type == DefaultAppChainsImpl.ResultType.TEXT) {
					if ("result".equals(r.getName())) {
						String data = ((DefaultAppChainsImpl.TextResultValue) r.getValue()).getData();

						System.err.println("file id" + fileId + "name is " + r.getName() + "data is " + data);

						if (data.contains("INCREASED RISK")) {
							wasFound = true;
							break;
						}
					}
				}
			}

			cachedChainsByFileId.get(fileId).put(chain, wasFound);
		}

		return cachedChainsByFileId.get(fileId).get(chain);
	}

}
