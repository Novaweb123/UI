import Breadcrumbs from '../../../../components/breadcrumbs';
import Card from '../../../../components/card';
import Flex from '../../../../components/flex';
import Button from '../../../../components/button';
import Text from '../../../../components/text';
import TextReadonly from '../../../../components/textReadonly';
import useAdmin from '../hooks/admin.hook';
import useHelper from "../../../../hooks/helpers.hook";


const AdminDetailsView = (props) => {
    const {getRoleLabel} = useHelper()
    const {userDetails} = props
    const { goToEditAdmin } = useAdmin();

    const BreadcrumbList = [
        {
            text: "User Management",
            link: "/user-management"
        },
        {
            text: "Admin",
            link: "/user-management/admin"
        },
        {
            text: "Details",
            link: ""
        },
    ]

    return (
        <>
            <Breadcrumbs
                pageTitle="Admin Details"
                breadcrumbList={BreadcrumbList}
            />
            <Card>
                <Text type="H3" text={userDetails?.fullname} className="mb-40" />
                <div className="details-list-wrapper">
                    <div className="row row-cols-2 row-cols-md-5">
                        <div className="col">
                            <TextReadonly
                                label="Username"
                                text={userDetails?.uname}
                            />
                        </div>
                        <div className="col">
                            <TextReadonly
                                label="Email Address"
                                text={userDetails?.email}
                            />
                        </div>
                        <div className="col">
                            <TextReadonly
                                label="Name"
                                text={userDetails?.fullname}
                            />
                        </div>
                        <div className="col">
                            <TextReadonly
                                label="Role"
                                text={getRoleLabel(userDetails?.usertypeid)}
                            />
                        </div>
                    </div>
                </div>
                <Flex justifyContent="end">
                    <Button
                        type="button"
                        text="Edit"
                        large
                        onClick={goToEditAdmin}
                    />
                </Flex>
            </Card>
        </>
    );
};

export default AdminDetailsView;
