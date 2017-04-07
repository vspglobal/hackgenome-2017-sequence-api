package com.kalieki.sequence;

/**
 * Created by jaswka on 4/6/17.
 */


        import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfiguration
{
    //@Value("${redirectMapping}")
    private String redirectMapping = "/redirect";

    //@Value("${redirectHost}")
    private String redirectHost="http://localhost:4200";

   // @Value("${clientId}")
    private String clientId="kalieki";

   // @Value("${clientSecret}")
    private String clientSecret="4yL8IJump2KgJ89w6CTNdI22y4ArR049-5HdznXQAfdRkonEOLaf8CC0W4FxZQyqYW_QQofVrTbCiNELlL7S0w";

    public String getRedirectMapping()
    {
        return redirectMapping;
    }

    public void setRedirectMapping(String redirectMapping)
    {
        this.redirectMapping = redirectMapping;
    }

    public String getClientId()
    {
        return clientId;
    }

    public void setClientId(String clientId)
    {
        this.clientId = clientId;
    }

    public String getClientSecret()
    {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret)
    {
        this.clientSecret = clientSecret;
    }

    public String getRedirectHost() {
        return redirectHost;
    }

    public void setRedirectHost(String redirectHost) {
        this.redirectHost = redirectHost;
    }
}
