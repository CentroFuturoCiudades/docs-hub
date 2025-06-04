# MicrosimuladorMTY 
**Simulación de flujos urbanos en Monterrey**

## 🎯 Objetivo
Modelar el comportamiento del tráfico vehicular en tiempo real usando:
- Datos de sensores IoT (ej: cámaras, GPS)
- Modelos basados en agentes (ABM)

## 🛠 Stack Tecnológico
| Tecnología       | Uso                          |
|------------------|------------------------------|
| Python 3.10      | Backend (pandas, numpy)      |
| SUMO (Simulación)| Microsimulación              |
| React            | Visualización                |

## 📊 Diagrama de Arquitectura
```mermaid
flowchart TB
    A[Entradas: Sensores] --> B(Preprocesamiento)
    B --> C[Modelo ABM]
    C --> D[(Salidas: KPIs)]
