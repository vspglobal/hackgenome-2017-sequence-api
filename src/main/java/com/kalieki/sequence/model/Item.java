package com.kalieki.sequence.model;

/**
 * Created by jaswka on 4/6/17.
 */
public class Item {
	private String name;
	private String warning;

	public Item() {
	}

	public Item(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWarning() {
		return warning;
	}

	public void setWarning(String warning) {
		this.warning = warning;
	}
}
