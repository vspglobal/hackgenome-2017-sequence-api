package com.kalieki.sequence.shopping;

import com.kalieki.sequence.model.DataFile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jaswka on 4/6/17.
 */
@RestController
@RequestMapping("/files")
@CrossOrigin
public class DataFileController {

    public static List<DataFile> files = new ArrayList<DataFile>();


    @RequestMapping(method = RequestMethod.GET)
    public List<DataFile> all(){
        return files;

    }
}
