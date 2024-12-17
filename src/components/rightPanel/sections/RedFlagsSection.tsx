import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { PanelAccordion } from '../common/PanelAccordion';

const redFlagsData = [
  {
    title: "Urgent Conditions",
    items: [
      {
        condition: "Neutropenic Fever",
        symptoms: ["Temperature ≥38.3°C", "ANC <500/μL"],
        action: "Immediate hospitalization required"
      },
      {
        condition: "Spinal Cord Compression",
        symptoms: ["New back pain", "Progressive weakness"],
        action: "Urgent MRI needed"
      }
    ]
  },
  {
    title: "Treatment Complications",
    items: [
      {
        condition: "Severe Mucositis",
        symptoms: ["Unable to eat/drink", "Severe pain"],
        action: "Consider admission"
      },
      {
        condition: "Thrombocytopenia",
        symptoms: ["Bleeding", "Platelets <10"],
        action: "Urgent platelet transfusion"
      }
    ]
  },
  {
    title: "Metabolic Emergencies",
    items: [
      {
        condition: "Tumor Lysis Syndrome",
        symptoms: ["High uric acid", "Kidney injury"],
        action: "Start rasburicase"
      },
      {
        condition: "Hypercalcemia",
        symptoms: ["Confusion", "Ca >14"],
        action: "IV fluids + bisphosphonates"
      }
    ]
  }
];

export function RedFlagsSection() {
  return (
    <div className="space-y-2">
      {redFlagsData.map((section, index) => (
        <PanelAccordion
          key={index}
          title={section.title}
          defaultOpen={index === 0}
        >
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="p-2 bg-white rounded-lg border-3d"
              >
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <div className="panel-text font-medium">{item.condition}</div>
                </div>
                <div className="space-y-1 ml-6">
                  <div className="panel-text-sm text-gray-600">
                    <span className="font-medium">Symptoms:</span>
                    <ul className="list-disc list-inside">
                      {item.symptoms.map((symptom, sIndex) => (
                        <li key={sIndex} className="panel-text-sm">{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="panel-text-sm text-red-600 font-medium">
                    Action: {item.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PanelAccordion>
      ))}
    </div>
  );
}
