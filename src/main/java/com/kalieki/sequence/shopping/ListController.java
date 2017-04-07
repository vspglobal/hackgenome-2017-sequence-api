package com.kalieki.sequence.shopping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kalieki.sequence.files.DataFileController;
import com.kalieki.sequence.model.Item;
import com.kalieki.sequence.nutrition.Nutrition;
import com.sequencing.appchains.DefaultAppChainsImpl;
import com.sequencing.oauth.core.SequencingOAuth2Client;
import com.sequencing.oauth.core.Token;

/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/list")
@CrossOrigin
public class ListController {
	@Autowired
	private SequencingOAuth2Client oauth;

	public static List<Item> itemList = null;

	private static Map<String, Boolean> isUserProneToHeartDisease = new HashMap<String, Boolean>();

	@RequestMapping(method = RequestMethod.GET)
	public List<Item> get() throws Exception {
		for (Item item : new ArrayList<Item>(itemList)) {
			if (userIsProneToHeartDisease() && Nutrition.doesFoodGetSaturatedFatWarning(item.getName())) {
				item.setWarning(
						"Warning - You are genetically prone to heart disease. This food is high in saturated fats");
			} else {
				item.setWarning(null);
			}
		}
		return itemList;
	}

	private boolean userIsProneToHeartDisease() throws Exception {
		Token token = oauth.getToken();
		DefaultAppChainsImpl chains = new DefaultAppChainsImpl(token.getAccessToken(), "api.sequencing.com");

		// DefaultAppChainsImpl.Report result = chains.getReport("StartApp",
		// "Chain63", "227679"); // homer
		String userId = DataFileController.getSelectedFile().getId();

		if (!isUserProneToHeartDisease.containsKey(userId)) {
			DefaultAppChainsImpl.Report result = chains.getReport("StartApp", "Chain63", userId);

			System.out.println(new ObjectMapper().writeValueAsString(result));

			if (!result.isSucceeded()) {
				throw new RuntimeException("Something went wrong");
			}

			for (DefaultAppChainsImpl.Result r : result.getResults()) {
				DefaultAppChainsImpl.ResultType type = r.getValue().getType();

				if (type == DefaultAppChainsImpl.ResultType.TEXT) {
					if ("result".equals(r.getName())) {
						if (((DefaultAppChainsImpl.TextResultValue) r.getValue()).getData()
								.contains("INCREASED RISK")) {
							isUserProneToHeartDisease.put(userId, true);
							return true;
						}
					}
				}
			}

			isUserProneToHeartDisease.put(userId, false);
			return false;
		} else {
			return isUserProneToHeartDisease.get(userId);
		}
	}

	@RequestMapping(method = RequestMethod.POST)
	public List<Item> add(@RequestBody Item item) {
		boolean exists = false;
		for (Item inList : itemList) {
			if (item.getName().equalsIgnoreCase(inList.getName())) {
				exists = true;
				break;
			}
		}

		if (!exists)
			itemList.add(item);
		return itemList;
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public List<Item> delete(@RequestBody Item item) {

		for (Item inList : itemList) {
			if (item.getName().equalsIgnoreCase(inList.getName())) {
				itemList.remove(inList);
				break;
			}
		}

		return itemList;
	}

}
