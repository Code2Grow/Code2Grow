#include <iostream>

int main() {
    // Print the size of different pointer types
    std::cout << "Size of int* (pointer to int): " << sizeof(int*) << " bytes" << std::endl;
    std::cout << "Size of char* (pointer to char): " << sizeof(char*) << " bytes" << std::endl;
    std::cout << "Size of double* (pointer to double): " << sizeof(double*) << " bytes" << std::endl;
    std::cout << "Size of void* (generic pointer): " << sizeof(void*) << " bytes" << std::endl;

    return 0;
}
