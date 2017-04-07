package com.kalieki.sequence.suggest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kalieki.sequence.model.Item;
import com.kalieki.sequence.shopping.ListController;
import com.kalieki.sequence.user.ChainDao;

@RestController
@RequestMapping("/suggest")
@CrossOrigin
public class SuggestController {
	@Autowired
	private ChainDao chains;

	@RequestMapping(method = RequestMethod.GET)
	public List<Suggestion> getSuggetions() throws Exception {
		List<Suggestion> suggestions = new ArrayList<Suggestion>();

		if (chains.userIsVitaminDDeficient() && listIsHasNoFoodsHighInVitaminD()) {
			Suggestion suggestion = new Suggestion();
			suggestion.setMessage(
					"You are prone to Vitamin D deficiency.  Foods high in Vitamin D may help you stay healthy.  Here are some foods high in Vitamin D to add to your shopping list:");
			suggestion.getItems().add("Salmon");
			suggestion.getItems().add("Tuna");
			suggestion.getItems().add("Eggs");

			suggestions.add(suggestion);
		}

		return suggestions;
	}

	private boolean listIsHasNoFoodsHighInVitaminD() {
		List<Item> items = new ArrayList<Item>(ListController.itemList);

		for (Item item : items) {
			if (Arrays.asList("Salmon", "Tuna", "Eggs").contains(item.getName())) {
				return false;
			}
		}

		return true;
	}
}
