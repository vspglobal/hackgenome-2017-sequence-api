package com.kalieki.sequence.nutrition;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UsdaList {
	private List<FoodItem> item;

	public List<FoodItem> getItem() {
		return item;
	}

	public void setItem(List<FoodItem> item) {
		this.item = item;
	}

}
