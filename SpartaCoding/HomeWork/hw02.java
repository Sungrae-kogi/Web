import java.util.*;

public class hw02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> recipeList = new ArrayList<>();
        Set<String> recipeSet = new LinkedHashSet<>();
        Map<Integer, String> recipeMap = new HashMap<>();

        System.out.print("저장할 자료구조 명 입력 : ");
        String dataStructure = sc.nextLine();

        System.out.print("내가 좋아하는 요리 제목 : ");
        String cookName = sc.nextLine();
        //hashMap에서 사용할 idx
        int number = 1;

        //사용할 DS 구조 입력
        switch (dataStructure) {
            case "List":
                while (true) {
                    String recipeLine = sc.nextLine();
                    if (recipeLine.equals("끝"))
                        break;
                    recipeList.add(recipeLine);
                }
                //출력부분
                System.out.println("[" + dataStructure + " 으로 저장된 " + cookName + " ]");
                for (String line : recipeList) {
                    System.out.println(number + ". " + line);
                    number++;
                }
                break;
            case "Set":
                while (true) {
                    String recipeLine = sc.nextLine();
                    if (recipeLine.equals("끝"))
                        break;
                    recipeSet.add(recipeLine);
                }
                //출력부분
                System.out.println("[" + dataStructure + " 으로 저장된 " + cookName + " ]");
                for (String line : recipeSet) {
                    System.out.println(number + ". " + line);
                    number++;
                }
                break;
            case "Map":
                int idx = 1;
                while (true) {
                    String recipeLine = sc.nextLine();
                    if (recipeLine.equals("끝"))
                        break;
                    recipeMap.put(idx++, recipeLine);
                }
                //출력부분
                System.out.println("[" + dataStructure + " 으로 저장된 " + cookName + " ]");
                for (int i = 0; i < recipeMap.size(); i++) {
                    System.out.println(number + ". " + recipeMap.get(number++));
                }
                break;
        }
    }
}
