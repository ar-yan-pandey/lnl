import React from "react";

interface Plan {
  tag: string;
  highlight?: string;
  price: string;
  subtitle: string;
  features: string[];
  button: string;
  color: string;
  onClick?: () => void;
}

interface PlanComparisonModalProps {
  open: boolean;
  onClose: () => void;
  onOpenContactForm: () => void;
}

const plans: Plan[] = [
  {
    tag: "LeadLite",
    highlight: "80% OFF",
    price: "₹5",
    subtitle: "First 100 Contacts",
    features: [
      "100 verified phone numbers",
      "100% credit refund for wrong numbers",
      "95% accuracy guarantee",
      "Perfect for sales & recruitment"
    ],
    button: "Get First 100 for ₹5",
    color: "green"
  },
  {
    tag: "LinkUp",
    highlight: "Most Popular",
    price: "₹25",
    subtitle: "After 100 Contacts",
    features: [
      "Unlimited contacts",
      "100% credit refund for wrong numbers",
      "95% accuracy guarantee",
      "Priority support"
    ],
    button: "Get Started",
    color: "blue"
  },
  {
    tag: "Leads & Links PRO",
    highlight: "Enterprise",
    price: "Custom",
    subtitle: "500+ Contacts/Month",
    features: [
      "Bulk pricing (up to 40% off)",
      "Dedicated account manager",
      "API access",
      "24/7 priority support"
    ],
    button: "Contact Sales",
    color: "purple"
  }
];

const highlightColor = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700"
};

const PlanComparisonModal: React.FC<PlanComparisonModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-none md:rounded-3xl shadow-2xl max-w-5xl w-full h-full md:h-auto mx-0 md:mx-4 relative animate-fadeIn flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-900 text-3xl md:text-2xl font-bold focus:outline-none p-3 md:p-2 bg-gray-100 md:bg-transparent rounded-full z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="px-3 pt-16 pb-4 md:px-8 md:pt-10 md:pb-8 overflow-y-auto flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-900">Compare Plans</h2>
          <p className="text-center text-gray-500 mb-6 md:mb-10 text-base md:text-lg">Find the best fit for your team. No hidden fees. Only pay for verified contacts.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.tag}
                className={`relative bg-white rounded-none md:rounded-2xl border-2 border-gray-200 shadow-md p-2 md:p-8 flex flex-col items-center transition-all duration-300 ${
                  idx === 1 ? 'scale-105 z-10 border-blue-400 shadow-xl' : ''
                }`}
              >
                {plan.highlight && (
                  <span className={`absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-bold shadow ${highlightColor[plan.color]} uppercase tracking-wide`}>
                    {plan.highlight}
                  </span>
                )}
                <span className={`text-lg font-bold mb-2 px-6 py-2 rounded-full ${plan.tag === 'LeadLite' ? 'bg-gray-900' : `bg-${plan.color}-600`} text-white uppercase tracking-wide shadow-md`}>
  {plan.tag}
</span>
                <div className="text-3xl font-extrabold text-gray-900 mt-6 mb-1">
                  {plan.price}
                  <span className="text-base font-medium text-gray-500 ml-1">{plan.price === "Custom" ? "" : "/contact"}</span>
                </div>
                <div className="text-gray-500 mb-6 text-sm font-semibold">{plan.subtitle}</div>
                <ul className="text-gray-700 space-y-2 text-sm mb-8 text-left w-full max-w-xs mx-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-semibold py-3 rounded-lg transition text-white ${plan.tag === 'LeadLite' ? 'bg-gray-900 hover:bg-gray-800' : `bg-${plan.color}-600 hover:bg-${plan.color}-700`} shadow-lg text-base mt-auto`}
                  onClick={() => {
                    onClose();
                    onOpenContactForm();
                  }}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparisonModal;
