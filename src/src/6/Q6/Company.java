public class Company implements Comparable{

    private String companyName;

    //link
    // private User userInfo;
    // private String firstName;
    // private String lastName;
    //private String version;
     
    public Company(String companyName){
        this.companyName = companyName;
        // this.firstName = firstName;
        // this.lastName = lastName;
    }

    @Override
    public String toString(){
        return "Company: " + companyName ;
    }

    @Override
    public int compareTo(Object o){
        Company comparingTo = (Company)o;

        int difference = this.toString().compareTo(comparingTo.toString());
        return difference;
    }
}