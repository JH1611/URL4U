import Acortar from "@/components/Acortar"
import Banner from "@/components/Banner"
import Funcionamiento from "@/components/Funcionamiento"
import MainLayout from "@/layouts/MainLayout"

export default function Home() {
	return (
		<MainLayout>
			<Banner />
			<Funcionamiento />
			<Acortar />
		</MainLayout>
	)
}
