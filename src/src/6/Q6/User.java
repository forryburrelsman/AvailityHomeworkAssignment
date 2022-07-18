public class User implements Comparable{

    private String userId;
    private String firstName;
    private String lastName;

    //private String version;
     
    public User(String userId, String firstName, String lastName){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    @Override
    public String toString(){
        return userId + " " + firstName + " " + lastName;
    }

    @Override
    public int compareTo(Object o){
        Company comparingTo = (Company)o;

        int difference = this.toString().compareTo(comparingTo.toString());
        return difference;
    }
}
