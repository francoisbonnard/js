#include <vector>
#include <iostream>
#include <chrono>

// gcc -std=c++11 .\multi-threaderc++.cpp -o .\multi-threaded.exe -lstdc++

int main() {
    // Créer un vecteur de 100 éléments, chacun initialisé à 1e9
    std::vector<double> jobs(100, 1e9);

    auto start = std::chrono::high_resolution_clock::now();

    for (auto& job : jobs) {
        for (int i = 1; i <= 1000000; ++i) {
            job = i; 
    }}

    auto end = std::chrono::high_resolution_clock::now();
    
    std::chrono::duration<double, std::milli> duration_ms = end - start;
    std::chrono::duration<double> duration_sec = end - start;
    
    std::cout << "La boucle for a pris " << duration_ms.count() << " millisecondes." << std::endl;
    std::cout << "La boucle for a pris " << duration_sec.count() << " secondes." << std::endl;

// La boucle for a pris 59.112 millisecondes.
// La boucle for a pris 0.059112 secondes.

    return 0;
}
