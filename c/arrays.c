#include <stdio.h>

int main()
{
    int sizeA;
    printf("Introduce el tamano del array\n");

    scanf("%i", &sizeA);
    int age[sizeA];

    int i;
    for (i = 0; i < sizeA; i++)
    {
        printf("Introduce el valor %i\n", i + 1);
        scanf("%i", &age[i]);
    }

    printf("Los valores del array son:\n");
    for (int i = 0; i < sizeA; i++)
    {
        printf("%i\n", age[i]);
    }
    return 0;
}