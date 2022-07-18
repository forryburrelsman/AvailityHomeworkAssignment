import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class CSVread {
    public static void main(String[] args) {
        //Uder Id, First and Last Name, Version, Insurance Company

        String path = "C:/Users/Forrest/Desktop/MOCK_DATA.csv";
        String line;
        ArrayList<Company> companiesArr = new ArrayList<>();
        HashMap<Company, User> companies = new HashMap<>();
        
        try {
            BufferedReader br = new BufferedReader(new FileReader(path));

            while((line = br.readLine()) != null) {
                String[] values = line.split(",");
                
                //skip first row(key names)
                // if (values[0].equals("\"\"")) 
                //     continue;
                
                String companyName = values[4];
                String firstName = values[1];
                String lastName = values[2];
                String userId = values[0];
                
                companiesArr.add(new Company(companyName));
                companies.put(new Company(companyName), new User(userId, firstName, lastName));
    
            
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        
        try {
            //writer = new BufferedWriter(new FileWriter(company + ".txt"));
            BufferedWriter writer;
            for (Company company : companiesArr ){
                writer = new BufferedWriter(new FileWriter(company+".txt"));
                writer.write(company.toString());
                writer.close();
            }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
       
        
    }
}