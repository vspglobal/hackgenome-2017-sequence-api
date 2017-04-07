package com.kalieki.sequence.user;


import com.sequencing.oauth.core.SequencingFileMetadataApi;
import com.sequencing.oauth.core.SequencingOAuth2Client;
import com.sequencing.oauth.core.Token;
import com.sequencing.oauth.exception.NonAuthorizedException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by kalieki on 3/24/17.
 */

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private SequencingOAuth2Client oauth;

    @Autowired
    private SequencingFileMetadataApi api;

    private Logger logger = Logger.getLogger(getClass());

    @RequestMapping( method = RequestMethod.GET, params = { "state", "code" })
    @CrossOrigin
    public Boolean authCallbackResponse(@RequestParam("state") String state, @RequestParam("code") String code) throws NonAuthorizedException {

        try {
            Token token  = oauth.authorize(code, state);
            logger.info("Authentication tokens: access token : " + token.getAccessToken() + ", refresh token: " + token.getRefreshToken());


        } catch (Exception e) {
            logger.warn("An unsuccessful attempt to get the token", e);
            return false;
        }

        String files = api.getFiles();
        
        System.out.println(files);

        return true;
    }
}
