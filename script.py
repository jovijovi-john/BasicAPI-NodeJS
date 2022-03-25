"""
Script para criar as pastas das aulas
"""

import os 

dir = "aula-"

qtd_aulas = int(input("Informe quantas aulas você quer: "))
numAula = int(input("Informe qual será a aula inicial: "))

try:
    for i in range(numAula, qtd_aulas + numAula):

        print(f"{numAula} {qtd_aulas} {numAula}")
        if numAula < 10:
            numAulaString = "0" + str(numAula)
        else:
            numAulaString = str(numAula)

        print(i)
        
        numAula += 1
        dirName = dir + numAulaString
        os.makedirs(dirName)

except(FileExistsError):

    print("Não é possível criar um arquivo já existente, verifique se estas pastas não já foram criadas anteriormente");