#include <stdio.h>

int main()
{
    int num1;
    int num2;
    int resultado;
    int a = 12;
    int b = 3;
    printf("Ingrese primer valor\n");
    scanf("%d", &num1);

    printf("Ingrese segundo valor\n");
    scanf("%d", &num2);

    resultado = a * b * num1 + num2;
    printf("El resultado  es:%d\n ", resultado);

    return 0;
}