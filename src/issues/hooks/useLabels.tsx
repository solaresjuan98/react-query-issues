import { useQuery } from '@tanstack/react-query'
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {

    await sleep(3);
    const { data } = await githubApi.get<Label[]>('/labels');
    return data;

}
export const useLabels = () => {

    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 3600, // 1 hour = 3600 secs
        placeholderData: [
            {
                id: 71502270,
                node_id: "MDU6TGFiZWw3MTUwMjI3MA==",
                url: "https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure",
                name: "Component: Build Infrastructure",
                color: "f9d0c4",
                default: false,
                description: ""
            }
        ]
    })

    return labelsQuery;
}
