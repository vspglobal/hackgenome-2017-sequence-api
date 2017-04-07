package com.kalieki.sequence.model;

/**
 * Created by jaswka on 4/6/17.
 */
public class DataFile {

	private String Id;

	private String Name;

	private String DateAdded;

	private String Ext;

	private String FileCategory;

	private String FileSubType;

	private String FileType;

	private String FriendlyDesc1;

	private String FriendlyDesc2;

	private String Population;

	private String Dex;

	private String WasUsedPreviously;

	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getDateAdded() {
		return DateAdded;
	}

	public void setDateAdded(String dateAdded) {
		DateAdded = dateAdded;
	}

	public String getExt() {
		return Ext;
	}

	public void setExt(String ext) {
		Ext = ext;
	}

	public String getFileCategory() {
		return FileCategory;
	}

	public void setFileCategory(String fileCategory) {
		FileCategory = fileCategory;
	}

	public String getFileSubType() {
		return FileSubType;
	}

	public void setFileSubType(String fileSubType) {
		FileSubType = fileSubType;
	}

	public String getFileType() {
		return FileType;
	}

	public void setFileType(String fileType) {
		FileType = fileType;
	}

	public String getFriendlyDesc1() {
		return FriendlyDesc1;
	}

	public void setFriendlyDesc1(String friendlyDesc1) {
		FriendlyDesc1 = friendlyDesc1;
	}

	public String getFriendlyDesc2() {
		return FriendlyDesc2;
	}

	public void setFriendlyDesc2(String friendlyDesc2) {
		FriendlyDesc2 = friendlyDesc2;
	}

	public String getPopulation() {
		return Population;
	}

	public void setPopulation(String population) {
		Population = population;
	}

	public String getDex() {
		return Dex;
	}

	public void setDex(String dex) {
		Dex = dex;
	}

	public String getWasUsedPreviously() {
		return WasUsedPreviously;
	}

	public void setWasUsedPreviously(String wasUsedPreviously) {
		WasUsedPreviously = wasUsedPreviously;
	}

	private boolean selected;

	public boolean isSelected() {
		return selected;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}
}
