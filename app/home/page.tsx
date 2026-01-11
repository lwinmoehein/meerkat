import '@radix-ui/themes/styles.css'
import { deleteJob, getJobs, getUser } from "@/app/lib/actions";
import { Box, Flex, Text } from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";
import { Grid } from "@radix-ui/themes";
import JobItem from "@/components/job/job-item";
import EmptyPlaceholder from "@/components/empty-placeholder";


export default async function Page() {
    const jobs = await getJobs()
    const user = await getUser()

    return (
        <Box p={"4"}>
            <Flex justify={'between'} align={'center'} mb={"4"}>
                <Box>
                    <Text weight={'bold'} size={'6'} style={{ display: 'block' }}>
                        Web Pages
                    </Text>
                    <Text size={'2'} style={{ opacity: 0.7 }}>
                        Monitor and track changes on your websites
                    </Text>
                </Box>
                <AddJobDialog user={user} />
            </Flex>

            {jobs && jobs.length > 0 && <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="5" width="auto">
                {jobs && jobs.map((job, index) =>
                    <JobItem key={job.id} job={job} />
                )}
            </Grid>}

            {
                (jobs == null || jobs.length == 0) && <EmptyPlaceholder message={"No web pages were added yet."} />
            }
        </Box>
    )
}
