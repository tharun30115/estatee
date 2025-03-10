import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.webp";
import p3 from "../../assets/images/p3.webp";
import p4 from "../../assets/images/p4.webp";

const Latest = () => {
	const items = [
		{
			title: "Brigade Towers",
			code: "036",
			location: "Banglore, India",
			price: "₹99,99,990",
			image: p1,
		},
		{
			title: "Signature Towers",
			code: "019",
			location: "Banglore, India",
			price: "₹98,460,000",
			image: p2,
		},
		{
			title: "Prestige Apartments",
			code: "051",
			location: "Banglore, India",
			price: "₹98,950,000",
			image: p3,
		},
		{
			title: "Ncc captures",
			code: "073",
			location: "Banglore, India",
			price: "₹67,300,000",
			image: p4,
		},
	];

	return (
		<div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center pt-8 pb-16 gap-10">
			<div className="flex flex-col items-center gap-2">
				<span className="text-[28px] font-semibold text-[#416477] text-center">
					Our Latest Properties
				</span>
				<p className="font-light text-[15px] text-gray-600 text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum repellat illum
					officiis in maiores.
				</p>
			</div>
			<div className="w-full flex xl:flex-row flex-col items-center justify-between gap-8">
				{items.map((item) => (
					<div
						key={item.title}
						className="w-full h-[420px] rounded-lg bg-cover bg-center flex flex-col justify-end items-center py-3"
						style={{ backgroundImage: `url(${item.image})` }}
					>
						<div className="w-[95%] bg-[#f3e9def6] rounded-xl flex items-center justify-between px-5 py-3 shadow-lg">
							<div className="flex flex-col gap-1 justify-center">
								<span className="text-[#333] font-semibold text-[25px]">{item.title}</span>
								<span className="text-gray-700 text-[15px]">Code {item.code}</span>
							</div>

							<div className="flex flex-col gap-1 justify-center">
								<span className="text-[#333] font-semibold text-[25px]">{item.price}</span>
								<span className="text-gray-700 text-[15px]">{item.location}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Latest;
