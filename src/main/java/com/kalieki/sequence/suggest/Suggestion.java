package com.kalieki.sequence.suggest;

import java.util.ArrayList;
import java.util.List;

public class Suggestion {
	private String message;
	private List<String> items = new ArrayList<String>();

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<String> getItems() {
		return items;
	}

	public void setItems(List<String> items) {
		this.items = items;
	}

}
