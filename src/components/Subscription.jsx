import React, { useRef } from 'react';

const plans = [
	{
		name: 'Basic',
		price: '₹199',
		color: 'blue-600',
		border: 'border-blue-100 dark:border-gray-700',
		features: [
			'✔️ Book Appointments',
			'✔️ View Doctors',
			'✔️ Access Pet Records',
			'❌ 24/7 Emergency Support',
			'❌ Priority Booking',
		],
		btn: 'bg-blue-600 hover:bg-blue-700',
		btnText: 'Choose Basic',
	},
	{
		name: 'Standard',
		price: '₹399',
		color: 'blue-700',
		border: 'border-2 border-blue-500 dark:border-blue-400',
		features: [
			'✔️ Book Appointments',
			'✔️ View Doctors',
			'✔️ Access Pet Records',
			'✔️ 24/7 Emergency Support',
			'❌ Priority Booking',
		],
		btn: 'bg-blue-700 hover:bg-blue-800',
		btnText: 'Choose Standard',
	},
	{
		name: 'Premium',
		price: '₹699',
		color: 'yellow-600',
		border: 'border-yellow-400 dark:border-yellow-500',
		features: [
			'✔️ Book Appointments',
			'✔️ View Doctors',
			'✔️ Access Pet Records',
			'✔️ 24/7 Emergency Support',
			'✔️ Priority Booking',
		],
		btn: 'bg-yellow-500 hover:bg-yellow-600',
		btnText: 'Choose Premium',
	},
];

const Subscription = ({ darkMode }) => {
	// For mobile tap bounce
	const cardRefs = [useRef(), useRef(), useRef()];

	const handleCardClick = (idx) => {
		const card = cardRefs[idx].current;
		if (card) {
			card.classList.remove('animate-jump');
			// Force reflow
			void card.offsetWidth;
			card.classList.add('animate-jump');
		}
	};

	return (
		<section
			className={`min-h-[87vh] flex flex-col items-center justify-center pt-30 sm:pt-0 px-2 sm:px-4 py-10 sm:py-20 ${
				darkMode
					? 'bg-gray-950 text-white'
					: 'bg-blue-50 text-gray-900'
			}`}
		>
			<h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 text-center">
				VetCare Subscription Plans
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
				{plans.map((plan, idx) => (
					<div
						key={plan.name}
						ref={cardRefs[idx]}
						tabIndex={0}
						className={`subscription-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center ${
							plan.border
						} transition-transform duration-300 ease-[cubic-bezier(.4,1.8,.6,1)] hover:-translate-y-2 hover:scale-105 focus:-translate-y-2 focus:scale-105 active:scale-95 cursor-pointer outline-none`}
						onClick={() => handleCardClick(idx)}
						onTouchStart={() => handleCardClick(idx)}
						onKeyDown={(e) =>
							(e.key === 'Enter' || e.key === ' ') &&
							handleCardClick(idx)
						}
					>
						<div
							className={`text-2xl sm:text-3xl font-bold text-${plan.color} mb-2`}
						>
							{plan.name}
						</div>
						<div className="text-3xl sm:text-4xl font-extrabold mb-2">
							{plan.price}
							<span className="text-base sm:text-lg font-medium">
								/mo
							</span>
						</div>
						<ul className="mb-4 text-gray-700 dark:text-gray-300 text-center text-sm sm:text-base">
							{plan.features.map((f) => (
								<li key={f}>{f}</li>
							))}
						</ul>
						<button className={`px-5 py-2 sm:px-6 sm:py-2 bg-opacity-90 text-white rounded-lg shadow ${plan.btn} transition font-semibold w-full sm:w-auto mt-auto`}>
							{plan.btnText}
						</button>
					</div>
				))}
			</div>
			<style>{`
        @media (max-width: 640px) {
          .subscription-card { min-width: 90vw; max-width: 100vw; }
        }
        @keyframes jump {
          0% { transform: scale(1) translateY(0); }
          30% { transform: scale(1.08, 0.95) translateY(-10px); }
          50% { transform: scale(0.98, 1.05) translateY(-6px); }
          70% { transform: scale(1.03, 0.97) translateY(-2px); }
          100% { transform: scale(1) translateY(0); }
        }
        .animate-jump {
          animation: jump 0.5s cubic-bezier(.4,1.8,.6,1);
        }
      `}</style>
		</section>
	);
};

export default Subscription;
