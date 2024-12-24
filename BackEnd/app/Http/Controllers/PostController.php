<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        $post = Post::all();
        return response()->json([
            'status' => 200,
            'post'   => $post,
        ]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'title'       => 'required',
                'description' => 'required',
            ],
            [
                'title.required'       => 'Title is required',
                'description.required' => 'Description is required',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'error'  => $validator->errors(),
            ]);
        } else {
            Post::create($request->all());
            return response()->json([
                'status' => 200,
                'msg'    => 'Post created!',
            ]);
        }

    }

    public function view($id)
    {
        $post = Post::find($id);
        return response()->json([
            'status' => 200,
            'post'   => $post,
        ]);
    }

    public function edit($id)
    {
        $post = Post::find($id);
        return response()->json([
            'status' => 200,
            'post'   => $post,
        ]);
    }

    public function update(Request $request, $id)
    {

        $post = Post::find($id);

        $validator = Validator::make($request->all(),
            [
                'title'       => 'required',
                'description' => 'required',
            ],
            [
                'title.required'       => 'Title is required',
                'description.required' => 'Description is required',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'error'  => $validator->errors(),
            ]);
        } else {
            $post->update($request->all());
            return response()->json([
                'status' => 200,
                'msg'    => 'Post updated!',
            ]);
        };
    }

    public function delete($id)
    {
        Post::find($id)->delete();
        return response()->json([
            'status' => 200,
            'msg'    => 'Post deleted!',
        ]);
    }
}
