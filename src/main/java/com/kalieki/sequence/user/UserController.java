package com.kalieki.sequence.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by kalieki on 3/24/17.
 */

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private HttpClient client = HttpClientBuilder.create().build();

    @RequestMapping(method = RequestMethod.GET)
    public String getToken(@RequestParam() String code) throws IOException {
        HttpPost post = new HttpPost("https://sequencing.com/oauth2/token");

        List<NameValuePair> body = new ArrayList<NameValuePair>();

        body.add(new BasicNameValuePair("grant_type", "authorization_code"));
        body.add(new BasicNameValuePair("client_id", "kalieki"));
        body.add(new BasicNameValuePair("client_secret", "4yL8IJump2KgJ89w6CTNdI22y4ArR049-5HdznXQAfdRkonEOLaf8CC0W4FxZQyqYW_QQofVrTbCiNELlL7S0w"));
        body.add(new BasicNameValuePair("code", code));
        body.add(new BasicNameValuePair("redirect_uri", "http://localhost:4200/redirect"));

        HttpEntity entity = new UrlEncodedFormEntity(body);
        post.setEntity(entity);

        HttpResponse response = client.execute(post);
        HttpEntity responseEntity = response.getEntity();
        String respString = EntityUtils.toString(responseEntity);

        HashMap<String,Object> result =
                new ObjectMapper().readValue(respString, HashMap.class);

        String val = (String) result.get("access_token");
        if(val == null){
            throw new RuntimeException("Error Auth");
        }

        return val;
    }
}
