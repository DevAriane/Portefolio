<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(Project::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'link' => 'nullable|string',
            'technologies' => 'nullable|array',
        ]);

        $project = Project::create($validated);

        if ($project->link) {
            $qrPath = 'qrcodes/' . $project->id . '.png';
            Storage::disk('public')->put(
                $qrPath,
                QrCode::format('png')->size(300)->generate($project->link)
            );

            $project->update(['qr_code' => $qrPath]);
        }

        return response()->json($project, 201);
    }

    public function show($id)
    {
        return response()->json(Project::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->update($request->all());
        return response()->json($project);
    }

    public function destroy($id)
    {
        Project::findOrFail($id)->delete();
        return response()->json(['message' => 'Projet supprimé avec succès']);
    }
}
