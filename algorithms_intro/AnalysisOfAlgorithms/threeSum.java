


class ThreeSum {
    public static int count(int[]a){
        int N = a.length;
        int count = 0;
        for (int i = 0; i < N; i++){ 
            for (int j = i + 1 ; j <N;j++){ 
                for (int k = j + 1 ; k < N; k++){
                    if (a[i] + a[j] + a[k] == 0){ 
                        count++;
                    }
                }
            }
        }
        return count;
    }
  public static void main(String[] args){
    int[] a = {-1, 0, 1, 2, -1, -4,8,8,8,5,2,8,5,8,7,8,9,-8,-9};
    long startTime = System.nanoTime();
    System.out.println(count(a));
    long endTime = System.nanoTime();
    System.out.println("Time: " + (endTime - startTime));
  }
  }
