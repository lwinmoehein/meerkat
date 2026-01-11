import { Flex, Text } from "@radix-ui/themes";
import { Profile } from "@/components/Profile";
import { TabNavigation } from "@/components/TabNavigation";
import { getUser } from "@/app/lib/actions";
import Image from "next/image";


export default async function NavBar() {

    const user = await getUser()
    return (
        <Flex direction={'column'}>
            <Flex
                p={'2'}
                maxHeight={'80px'}
                justify={'between'}
                align={'center'}
            >
                <Flex justify={'center'} align={'center'} gap={'1'}>
                    <Image
                        src={'/meerkat.png'}
                        width={'80'}
                        height={'80'}
                        alt={'MeerkatSentry'}
                    />
                    <Flex direction={'column'}>
                        <Text weight={'bold'} size={'8'}>MeerkatSentry</Text>
                        <Text size={'1'}>Watch web pages and get notified.</Text>
                    </Flex>
                </Flex>
                {user && <Profile user={user} />}
            </Flex>
            <TabNavigation />
        </Flex>

    )
}