package com.kalieki.sequence.shopping;

import com.kalieki.sequence.model.Item;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/list")
@CrossOrigin
public class ListController {


    @RequestMapping(method = RequestMethod.GET)
    public List<Item> get(){
        List<Item> itemList = new ArrayList<Item>();
        itemList.add(new Item("Chicken"));
        itemList.add(new Item("Cookies"));
        itemList.add(new Item("Whole Milk"));
        return itemList;


    }
}
