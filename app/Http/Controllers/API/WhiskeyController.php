<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Whiskey;
use Illuminate\Http\Request;

class WhiskeyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Whiskey::get()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validated();

        Whiskey::create([
            'type' => $validated['type'],
            'distillery' => $validated['distillery'],
            'age' => $validated['age'],
            'barrel' => $validated['barrel'],
        ]);

        return response()->json('Whiskey created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Whiskey::find($id)->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Whiskey::find($id)->delete();

        return response()->json('Whiskey deleted!');
    }
}
