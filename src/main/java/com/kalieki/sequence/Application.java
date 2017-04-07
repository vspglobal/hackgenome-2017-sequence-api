package com.kalieki.sequence;

import com.kalieki.sequence.model.Item;
import com.kalieki.sequence.shopping.ListController;
import com.sequencing.oauth.config.AuthenticationParameters;
import com.sequencing.oauth.core.DefaultSequencingFileMetadataApi;
import com.sequencing.oauth.core.DefaultSequencingOAuth2Client;
import com.sequencing.oauth.core.SequencingFileMetadataApi;
import com.sequencing.oauth.core.SequencingOAuth2Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by kalieki on 3/24/17.
 */

@SpringBootApplication
public class Application {

    public static void main(String... args){
        initialize();
        SpringApplication.run(Application.class);
    }

    private static void initialize(){

        ListController.itemList = new ArrayList<Item>();
        ListController.itemList.add(new Item("Chicken"));
        ListController.itemList.add(new Item("Cookies"));
        ListController.itemList.add(new Item("Whole Milk"));

    }

    @Bean
    @Autowired
    public AuthenticationParameters getParameters(ApplicationConfiguration config)
    {
        return new AuthenticationParameters.ConfigurationBuilder()
                .withRedirectUri(config.getRedirectHost() + config.getRedirectMapping())
                .withClientId(config.getClientId())
                .withClientSecret(config.getClientSecret())
                .withScope("external|demo")
                .build();
    }

    @Bean
    @Autowired
    public SequencingOAuth2Client getOauth(AuthenticationParameters parameters) {
        return new DefaultSequencingOAuth2Client(parameters);
    }

    @Bean
    @Autowired
    public SequencingFileMetadataApi getFileMetadataApi(SequencingOAuth2Client client) {
        return new DefaultSequencingFileMetadataApi(client);
    }


}
