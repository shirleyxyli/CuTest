package testcase;

import cucumber.api.java.en.*;

import static org.junit.Assert.assertEquals;

/**
 * Created by shirley.li on 2016-8-24.
 */
public class SecondCase {

    public int num1;
    public int result;

    @Given("^input BaseNum (\\d+)$")
    public void InputBase(int BasNum){
        num1=BasNum;
    }

    @When("^start to add$")
    public void RuAdd(){
        Add t = new Add();
        result = t.addmore(num1);
    }

    @Then("^the result should be (\\d+)$")
    public void GetResult(int ExpResult){
        assertEquals(ExpResult,result);
        System.out.println("Result is:" + result);
    }
}
