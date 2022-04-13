import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Multi-Purpose Cleaner',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/162788447_2203511619781174_5597707065666535670_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jEVU7R9SKZEAX_IWSW2&_nc_ht=scontent-jnb1-1.xx&oh=00_AT_jK4dGxTzTWL64tNH9ZDa0elGXv6GZtM-2dqHaiOtZWQ&oe=62791829',
	},
	{
		name: 'Dishwashing Liquid',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/161976429_2201625876636415_1635393544941143010_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=LfIqa9gL0koAX8hmNqN&_nc_ht=scontent-jnb1-1.xx&oh=00_AT9TpW_k_q6yU2WG7G1X-kKlukixzRxNk3kpY4IXh3_e_Q&oe=627A0B77',
	},
	{
		name: 'Floor Care',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/162046667_2201635703302099_2616843584005865047_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PSkfGK4ZxlgAX_j3dW4&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8uaxw6UBRTe7VuvkKVN2IhK-f7WdL6uu8D1rv9PcRV2w&oe=627B1FB1',
	},
	{
		name: 'Shoe Care',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/164637472_2207653002700369_3856991804560336308_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8tZQyPrLfmUAX9udk6a&_nc_ht=scontent-jnb1-1.xx&oh=00_AT-X-01DnAN16ZjzGxqxGNeCltyj2clh5WdRYCuwz_0fGQ&oe=62785C51',
	},
	{
		name: 'Floor Care',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/162494652_2206013579530978_8392148449631194056_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=P19ePxnurQkAX9wQ8vO&_nc_ht=scontent-jnb1-1.xx&oh=00_AT-RIueHfeHH-PcscEVPUgVgO3heW7xtuNmBm6ncXXxGfw&oe=627A66E1',
	},
	{
		name: 'Best Cleaning Products',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
		image: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/170332102_2219702514828751_2587120132117303318_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_jMjq28NHoAAX9oL4on&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8695-NBNzB7l4N_KctayEno7rZo_IQg92Si41KGmbHjg&oe=62799CC7',
	},
];