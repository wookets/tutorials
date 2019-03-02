
@RestController
class Example {
    @GetMapping("/")
    public String helloWorld() {
        return "Hello World";
    }
}