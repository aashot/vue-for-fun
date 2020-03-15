import { ref, reactive, toRefs } from "@vue/composition-api";
import useFetch from './use-fetch';
export default function() {
    const val = ref("");
    const breweries = reactive({ list: [], error: false, fetching: false });

    const submitted = async() => {
        const { response, error, fetching } = useFetch(
            `https://api.openbrewerydb.org/breweries/?by_name=${val.value}`, {}
        );
        breweries.list = response;
        breweries.error = error;
        breweries.fetching = fetching;
    };

    return { val, ...toRefs(breweries), submitted };
}