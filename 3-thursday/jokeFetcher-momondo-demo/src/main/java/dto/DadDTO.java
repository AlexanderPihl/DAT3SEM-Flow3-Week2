/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Dad;

/**
 *
 * @author jplm
 */
public class DadDTO {
    
    private String joke;
    private String url = "https://icanhazdadjoke.com";
    

    public DadDTO(Dad dad, String url) {
        this.joke = dad.getJoke();
        this.url = url;
    }

    public DadDTO() {
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    
}
