package com.kalieki.sequence.shopping;

import com.sequencing.appchains.DefaultAppChainsImpl;
import com.sequencing.oauth.core.SequencingFileMetadataApi;
import com.sequencing.oauth.core.SequencingOAuth2Client;
import com.sequencing.oauth.exception.NonAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/disease")
public class DiseaseController {



    @Autowired
    private SequencingOAuth2Client oauth;


    @RequestMapping(method = RequestMethod.GET,value = "/susceptible")
    public String susceptible() {
        DefaultAppChainsImpl chains = new DefaultAppChainsImpl(oauth.getToken().toString(), "api.sequencing.com");

        DefaultAppChainsImpl.Report result = chains.getReport("StartApp", "Chain891", "80602");

        if (result.isSucceeded() == false)
            System.out.println("Request has failed");
        else
            System.out.println("Request has succeeded");

        for (DefaultAppChainsImpl.Result r : result.getResults())
        {
            DefaultAppChainsImpl.ResultType type = r.getValue().getType();

            if (type == DefaultAppChainsImpl.ResultType.TEXT)
            {
                DefaultAppChainsImpl.TextResultValue v = (DefaultAppChainsImpl.TextResultValue) r.getValue();
                System.out.println(String.format(" -> text result type %s = %s", r.getName(), v.getData()));
            }
        }


        return "done!!!";

    }
}
