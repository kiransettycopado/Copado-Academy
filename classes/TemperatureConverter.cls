public class TemperatureConverter {
     // Takes a Fahrenheit temperature and returns the Celsius equivalentabc.
     //adding a comment
     //CVCTest
    public static Decimal FahrenheitToCelsius(Decimal fh) {
        Decimal cs = (fh - 32) * 5/9;
        return cs.setScale(2);
    }
}