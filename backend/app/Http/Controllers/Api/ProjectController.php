<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Exception;

class ProjectController extends Controller
{
    /**
     * Récupère la liste de tous les projets
     */
    public function index()
    {
        return response()->json(Project::all(), 200);
    }

    /**
     * Crée un nouveau projet
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
                'link' => 'nullable|url',
                'technologies' => 'nullable|array',
                'type' => 'required|in:mobile,web',
            ]);

            // 📦 Upload image si fournie
            if ($request->hasFile('image')) {
                $validated['image'] = $request->file('image')->store('projects', 'public');
            }

            // 💾 Création du projet
            $project = Project::create($validated);

            // 🔗 Génération du QR code s’il y a un lien
            if ($project->link) {
                $qrPath = 'qrcodes/project_' . uniqid() . '.png';
                Storage::disk('public')->put(
                    $qrPath,
                    QrCode::format('png')->size(300)->generate($project->link)
                );
                $project->update(['qr_code' => $qrPath]);
            }

            return response()->json($project, 201);
        } catch (Exception $e) {
            return response()->json(['error' => 'Erreur lors de la création du projet : ' . $e->getMessage()], 500);
        }
    }

    /**
     * Affiche un projet spécifique
     */
    public function show($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Projet introuvable'], 404);
        }

        return response()->json($project, 200);
    }

    /**
     * Met à jour un projet existant
     */
    public function update(Request $request, $id)
    {
        try {
            $project = Project::findOrFail($id);

            $validated = $request->validate([
                'title' => 'sometimes|string|max:255',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
                'link' => 'nullable|url',
                'technologies' => 'nullable|array',
                'type' => 'sometimes|in:mobile,web',
            ]);

            if ($request->hasFile('image')) {
                // Supprimer l'ancienne image si elle existe
                if ($project->image && Storage::disk('public')->exists($project->image)) {
                    Storage::disk('public')->delete($project->image);
                }
                $validated['image'] = $request->file('image')->store('projects', 'public');
            }

            $project->update($validated);

            // Mettre à jour le QR code si le lien a changé
            if (isset($validated['link'])) {
                $qrPath = 'qrcodes/project_' . uniqid() . '.png';
                Storage::disk('public')->put(
                    $qrPath,
                    QrCode::format('png')->size(300)->generate($project->link)
                );
                $project->update(['qr_code' => $qrPath]);
            }

            return response()->json($project, 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Erreur lors de la mise à jour : ' . $e->getMessage()], 500);
        }
    }

    /**
     * Supprime un projet
     */
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Projet introuvable'], 404);
        }

        // Supprimer image + QR code s’ils existent
        if ($project->image && Storage::disk('public')->exists($project->image)) {
            Storage::disk('public')->delete($project->image);
        }

        if ($project->qr_code && Storage::disk('public')->exists($project->qr_code)) {
            Storage::disk('public')->delete($project->qr_code);
        }

        $project->delete();

        return response()->json(['message' => 'Projet supprimé avec succès'], 200);
    }
}
