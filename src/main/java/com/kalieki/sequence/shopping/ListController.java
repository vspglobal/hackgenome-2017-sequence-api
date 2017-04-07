package com.kalieki.sequence.shopping;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kalieki.sequence.model.Item;
import com.kalieki.sequence.nutrition.Nutrition;
import com.kalieki.sequence.user.ChainDao;

/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/list")
@CrossOrigin
public class ListController {

	@Autowired
	private ChainDao chains;

	public static List<Item> itemList = null;

	@RequestMapping(method = RequestMethod.GET)
	public List<Item> get() throws Exception {
		for (Item item : new ArrayList<Item>(itemList)) {
			if (Nutrition.doesFoodGetSaturatedFatWarning(item.getName()) && chains.userIsProneToHeartDisease()) {
				item.setWarning(
						"Warning - You are genetically prone to heart disease. This food is high in saturated fats (Based on matching food item of "
								+ Nutrition.getFoodItemName(item.getName()) + ")");

			} else if (Nutrition.doesFoodGetSodiumWarning(item.getName()) && chains.userIsProneToHypertension()) {
				item.setWarning(
						"Warning - You are genetically prone to hypertension.  This food is high in sodium (Based on matching food item of "
								+ Nutrition.getFoodItemName(item.getName()) + ")");
			} else {
				item.setWarning(null);
			}
		}
		return itemList;
	}

	@RequestMapping(method = RequestMethod.POST)
	public List<Item> add(@RequestBody Item item) {
		boolean exists = false;
		for (Item inList : itemList) {
			if (item.getName().equalsIgnoreCase(inList.getName())) {
				exists = true;
				break;
			}
		}

		if (!exists) {
			itemList.add(item);
		}
		return itemList;
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public List<Item> delete(@RequestBody Item item) {

		for (Item inList : itemList) {
			if (item.getName().equalsIgnoreCase(inList.getName())) {
				itemList.remove(inList);
				break;
			}
		}

		return itemList;
	}

}
