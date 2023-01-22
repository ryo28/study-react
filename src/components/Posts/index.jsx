import { useCallback, useEffect, useReducer } from "react";

const initialState = {
  date: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return { ...state, date: action.date, loading: false };

    case "error":
      return { ...state, loading: false, error: action.error };
    default: {
      throw new Error("no  such action type!");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データが取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ type: "end", date: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (state.loading) {
    return <div>ローディング中</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.date.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.date.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
