/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Chuck;

/**
 *
 * @author jplm
 */
public class ChuckDTO {
    
    private String url;
    private String value;
    private Chuck chuck;

    public ChuckDTO() {
    }

    public ChuckDTO(Chuck chuck) {
        this.url = chuck.getUrl();
        this.value = chuck.getValue();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Chuck getChuck() {
        return chuck;
    }

    public void setChuck(Chuck chuck) {
        this.chuck = chuck;
    }   
    
}
