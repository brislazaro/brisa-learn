#include <stdio.h>
int main()
{
    int casos;
    printf("Ingrese un numero\n");
    scanf("%i", &casos);
    switch (casos)
    {
    case 1:
        printf("Elegiste el caso 1\n");
        break;

    case 2:
        printf("Elegiste el caso 2\n");
        break;

    case 3:
        printf("Elegiste el caso 3\n");
        break;

    default:
        printf("No existe ese caso\n");
        break;
    }
}