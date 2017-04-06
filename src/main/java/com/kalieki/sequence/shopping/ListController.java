package com.kalieki.sequence.shopping;

import com.kalieki.sequence.model.Item;
import org.springframework.web.bind.annotation.*;

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

    public static List<Item> itemList = null;

    @RequestMapping(method = RequestMethod.GET)
    public List<Item> get(){

        return itemList;
    }
    @RequestMapping(method = RequestMethod.POST)
    public List<Item> add(@RequestBody Item item){
        boolean exists = false;
        for(Item inList:itemList) {
            if(item.getName().equalsIgnoreCase(inList.getName())){
                exists = true;
                break;
            }
        }

        if( !exists)
             itemList.add(item);
        return itemList;
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public List<Item> delete(@RequestBody Item item){

      for(Item inList:itemList) {
          if(item.getName().equalsIgnoreCase(inList.getName())){
              itemList.remove(inList);
              break;
          }
      }


        return itemList;
    }

}
