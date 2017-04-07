package com.kalieki.sequence.files;

import com.kalieki.sequence.model.DataFile;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method = RequestMethod.POST)
    public Boolean setSelectedFile(@RequestBody DataFile file){
        String id = file.getId();
        if(id == null){
            throw new RuntimeException("Bad Request");
        }
        for(DataFile f : files){
            f.setSelected(f.getId().equals(id));
        }

        return true;

    }
}
