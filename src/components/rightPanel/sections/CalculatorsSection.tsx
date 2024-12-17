import React from 'react';
import { PanelAccordion } from '../common/PanelAccordion';

const calculators = [
  {
    title: "Dosing Calculators",
    items: [
      { name: "Body Surface Area (BSA)", description: "Calculate BSA for chemotherapy dosing" },
      { name: "Carboplatin AUC", description: "Calculate Carboplatin dose using Calvert formula" },
      { name: "Creatinine Clearance", description: "Calculate CrCl using Cockcroft-Gault formula" }
    ]
  },
  {
    title: "Assessment Tools",
    items: [
      { name: "ECOG Performance Status", description: "Evaluate patient's performance status" },
      { name: "Body Mass Index (BMI)", description: "Calculate patient's BMI" },
      { name: "Ideal Body Weight", description: "Calculate ideal body weight" }
    ]
  },
  {
    title: "Conversion Tools",
    items: [
      { name: "Opioid Conversion", description: "Convert between different opioid medications" },
      { name: "Unit Converter", description: "Convert between different units of measurement" }
    ]
  }
];

export function CalculatorsSection() {
  return (
    <div className="space-y-2">
      {calculators.map((section, index) => (
        <PanelAccordion
          key={index}
          title={section.title}
          defaultOpen={index === 0}
        >
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="p-2 bg-white rounded-lg border-3d cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="panel-text font-medium">{item.name}</div>
                <div className="panel-text-sm text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </PanelAccordion>
      ))}
    </div>
  );
}
