package com.kalieki.sequence;

import com.kalieki.sequence.model.Item;
import com.kalieki.sequence.shopping.ListController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
}
