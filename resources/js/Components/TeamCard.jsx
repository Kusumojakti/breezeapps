
function TeamCard({ img, name, title }) {

    return (
        <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
            <CardBody className="text-center">
                <Avatar
                    src={img}
                    alt={name}
                    variant="circular"
                    size="xxl"
                    className="mx-auto mb-6 object-top w-20"
                />
                <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
                    {name}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-2 !text-base !font-semibold text-gray-600"
                >
                    {title}
                </Typography>
                <div className="flex items-center justify-center gap-1.5">
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-twitter text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-linkedin text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-dribbble text-lg" />
                    </IconButton>
                </div>
            </CardBody>
        </Card>
    );
};
