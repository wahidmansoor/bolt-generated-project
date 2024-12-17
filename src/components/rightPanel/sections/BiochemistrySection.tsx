import React from 'react';
import { PanelAccordion } from '../common/PanelAccordion';

const biochemistryData = [
  {
    title: "Electrolytes",
    items: [
      { parameter: "Sodium", range: "135-145", unit: "mmol/L" },
      { parameter: "Potassium", range: "3.5-5.0", unit: "mmol/L" },
      { parameter: "Calcium", range: "2.2-2.6", unit: "mmol/L" }
    ]
  },
  {
    title: "Hematology",
    items: [
      { parameter: "Hemoglobin", range: "13.0-17.0", unit: "g/dL" },
      { parameter: "WBC", range: "4.0-11.0", unit: "×10⁹/L" },
      { parameter: "Platelets", range: "150-400", unit: "×10⁹/L" }
    ]
  },
  {
    title: "Liver Function",
    items: [
      { parameter: "ALT", range: "7-56", unit: "U/L" },
      { parameter: "AST", range: "10-40", unit: "U/L" },
      { parameter: "Bilirubin", range: "0.3-1.2", unit: "mg/dL" }
    ]
  }
];

export function BiochemistrySection() {
  return (
    <div className="space-y-2">
      {biochemistryData.map((section, index) => (
        <PanelAccordion
          key={index}
          title={section.title}
          defaultOpen={index === 0}
        >
          <div className="bg-white rounded-lg border-3d overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-left panel-text-sm font-medium text-gray-500">Parameter</th>
                  <th className="px-2 py-1 text-left panel-text-sm font-medium text-gray-500">Range</th>
                  <th className="px-2 py-1 text-left panel-text-sm font-medium text-gray-500">Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="hover:bg-gray-50">
                    <td className="px-2 py-1 panel-text-sm">{item.parameter}</td>
                    <td className="px-2 py-1 panel-text-sm">{item.range}</td>
                    <td className="px-2 py-1 panel-text-sm">{item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PanelAccordion>
      ))}
    </div>
  );
}
