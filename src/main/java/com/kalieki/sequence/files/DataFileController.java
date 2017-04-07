package com.kalieki.sequence.files;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kalieki.sequence.model.DataFile;

/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/files")
@CrossOrigin
public class DataFileController {

	public static List<DataFile> files = new ArrayList<DataFile>();

	@RequestMapping(method = RequestMethod.GET)
	public List<DataFile> all() {
		return files;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Boolean setSelectedFile(@RequestBody DataFile file) {
		String id = file.getId();
		if (id == null) {
			throw new RuntimeException("Bad Request");
		}
		for (DataFile f : files) {
			f.setSelected(f.getId().equals(id));
		}

		return true;

	}

	public static DataFile getSelectedFile() {
		for (DataFile file : new ArrayList<DataFile>(files)) {
			if (file.isSelected()) {
				return file;
			}
		}

		throw new NullPointerException("No file is selected");
	}
}
